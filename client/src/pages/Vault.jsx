import React, { useCallback, useEffect, useRef, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InputAdornment from '@mui/material/InputAdornment';
import Fab from '@mui/material/Fab';
import Tooltip from '@mui/material/Tooltip';
import Divider from '@mui/material/Divider';
import Checkbox from '@mui/material/Checkbox';
import LockIcon from '@mui/icons-material/Lock';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import DownloadIcon from '@mui/icons-material/Download';
import DeleteIcon from '@mui/icons-material/Delete';
import ShareIcon from '@mui/icons-material/Share';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import ImageIcon from '@mui/icons-material/Image';
import DescriptionIcon from '@mui/icons-material/Description';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import {
  clearVaultSession,
  createVaultGuestAccess,
  deleteVaultDocument,
  fetchVaultDocumentViewUrl,
  fetchVaultDocuments,
  fetchVaultGuestAccess,
  fetchVaultMe,
  getVaultToken,
  revokeVaultGuestAccess,
  uploadVaultDocument,
  vaultLogin,
  vaultLogout,
} from '../services/vaultApi';

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function displayName(doc) {
  return doc.title?.trim() || doc.originalName;
}

function defaultTitleFromFileName(fileName) {
  const base = fileName.replace(/\.[^/.]+$/, '').trim();
  return base || fileName;
}

function formatExpiryDate(iso) {
  if (!iso) return '';
  return new Date(iso).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function mimeIcon(mimeType) {
  if (mimeType.startsWith('image/')) return ImageIcon;
  if (mimeType === 'application/pdf') return PictureAsPdfIcon;
  if (mimeType.includes('word')) return DescriptionIcon;
  return InsertDriveFileIcon;
}

const pageStyles = {
  pageContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: 'var(--bg-primary)',
    color: 'var(--text-primary)',
    padding: { xs: 2, md: 4 },
    paddingTop: { xs: 4, md: 6 },
    paddingBottom: 10,
  },
  panel: {
    width: '100%',
    maxWidth: 900,
    borderRadius: 4,
    background: 'linear-gradient(135deg, var(--bg-card) 0%, var(--bg-secondary) 100%)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
    padding: { xs: 3, md: 4 },
    position: 'relative',
    overflow: 'hidden',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: '4px',
      background: 'linear-gradient(90deg, #f50057 0%, #c51162 50%, #f50057 100%)',
    },
  },
  textField: {
    width: '100%',
    '& .MuiInputBase-root': {
      color: 'var(--text-primary)',
      backgroundColor: 'var(--bg-card)',
    },
    '& .MuiInputLabel-root': {
      color: 'var(--text-tertiary)',
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: 'var(--border-color, rgba(255,255,255,0.12))',
    },
  },
  docRow: {
    borderRadius: 2,
    mb: 1,
    backgroundColor: 'var(--bg-card)',
    border: '1px solid var(--border-color, rgba(255,255,255,0.08))',
    '&:hover': {
      backgroundColor: 'var(--bg-secondary)',
    },
  },
};

function VaultLogin({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const resp = await vaultLogin({ username, password });
      onLogin({
        username: resp.data.username,
        role: resp.data.role,
        expiresAt: resp.data.expiresAt ?? null,
        documentIds: resp.data.documentIds ?? [],
      });
    } catch (err) {
      setError(err.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={pageStyles.pageContainer}>
      <Paper component="form" onSubmit={handleSubmit} sx={pageStyles.panel}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, mt: 1 }}>
          <Box sx={{ textAlign: 'center' }}>
            <LockIcon sx={{ fontSize: 48, color: '#f50057', mb: 1 }} />
            <Typography variant="h4" fontWeight={800} gutterBottom>
              Vault
            </Typography>
            <Typography color="text.secondary">
              Sign in to access secure documents
            </Typography>
          </Box>

          {error && <Alert severity="error">{error}</Alert>}

          <TextField
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            sx={pageStyles.textField}
            autoComplete="username"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonIcon sx={{ color: 'var(--text-tertiary)' }} />
                </InputAdornment>
              ),
            }}
          />

          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={pageStyles.textField}
            autoComplete="current-password"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon sx={{ color: 'var(--text-tertiary)' }} />
                </InputAdornment>
              ),
            }}
          />

          <Button
            type="submit"
            variant="contained"
            size="large"
            disabled={loading || !username.trim() || !password}
            sx={{
              py: 1.5,
              fontWeight: 700,
              background: 'linear-gradient(45deg, #f50057 30%, #c51162 90%)',
            }}
          >
            {loading ? <CircularProgress size={24} color="inherit" /> : 'Sign in'}
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}

function VaultDashboard({ session, onLogout, onSessionExpired }) {
  const isAdmin = session.role === 'ADMIN';
  const isGuest = session.role === 'GUEST';

  const [documents, setDocuments] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [guestAccess, setGuestAccess] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [apiError, setApiError] = useState(null);
  const [uploadModalOpen, setUploadModalOpen] = useState(false);
  const [pendingFile, setPendingFile] = useState(null);
  const [uploadTitle, setUploadTitle] = useState('');
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [shareModalOpen, setShareModalOpen] = useState(false);
  const [shareSelectedDocIds, setShareSelectedDocIds] = useState([]);
  const [listSelectedDocIds, setListSelectedDocIds] = useState([]);
  const [shareUsername, setShareUsername] = useState('');
  const [sharePassword, setSharePassword] = useState('');
  const [isSharing, setIsSharing] = useState(false);
  const [shareResult, setShareResult] = useState(null);
  const fileInputRef = useRef(null);
  const requestIdRef = useRef(0);

  const loadDocuments = useCallback(async () => {
    const requestId = ++requestIdRef.current;
    setIsLoading(true);
    setApiError(null);

    try {
      const resp = await fetchVaultDocuments({ page: 1, limit: 50 });
      if (requestId !== requestIdRef.current) return;
      setDocuments(resp.data.documents);
      setTotalCount(resp.data.pagination.totalCount);
    } catch (e) {
      if (requestId !== requestIdRef.current) return;
      setDocuments([]);
      setTotalCount(0);
      if (e.message?.includes('Session expired')) {
        onSessionExpired();
        return;
      }
      setApiError(e.message || 'Failed to load documents');
    } finally {
      if (requestId === requestIdRef.current) setIsLoading(false);
    }
  }, [onSessionExpired]);

  const loadGuestAccess = useCallback(async () => {
    if (!isAdmin) return;
    try {
      const resp = await fetchVaultGuestAccess();
      setGuestAccess(resp.data.guests);
    } catch (e) {
      if (e.message?.includes('Session expired')) {
        onSessionExpired();
        return;
      }
      setApiError(e.message || 'Failed to load guest access list');
    }
  }, [isAdmin, onSessionExpired]);

  useEffect(() => {
    loadDocuments();
    loadGuestAccess();
  }, [loadDocuments, loadGuestAccess]);

  const handleOpen = async (doc) => {
    try {
      const { data } = await fetchVaultDocumentViewUrl(doc.id);
      window.open(data.viewUrl, '_blank', 'noopener,noreferrer');
    } catch (e) {
      if (e.message?.includes('Session expired')) {
        onSessionExpired();
        return;
      }
      setApiError(e.message || 'Failed to get a secure view link');
    }
  };

  const handleDownload = async (doc) => {
    try {
      const { data } = await fetchVaultDocumentViewUrl(doc.id);
      const link = document.createElement('a');
      link.href = data.viewUrl;
      link.download = doc.originalName || displayName(doc);
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (e) {
      if (e.message?.includes('Session expired')) {
        onSessionExpired();
        return;
      }
      setApiError(e.message || 'Failed to get a secure download link');
    }
  };

  const handleConfirmDelete = async () => {
    if (!deleteTarget) return;
    try {
      await deleteVaultDocument({ id: deleteTarget.id });
      setDocuments((prev) => prev.filter((d) => d.id !== deleteTarget.id));
      setTotalCount((c) => Math.max(0, c - 1));
      loadGuestAccess();
    } catch (e) {
      if (e.message?.includes('Session expired')) {
        onSessionExpired();
        return;
      }
      setApiError(e.message || 'Delete failed');
    } finally {
      setDeleteTarget(null);
    }
  };

  const closeUploadModal = () => {
    setUploadModalOpen(false);
    setPendingFile(null);
    setUploadTitle('');
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const closeShareModal = () => {
    setShareModalOpen(false);
    setShareSelectedDocIds([]);
    setShareUsername('');
    setSharePassword('');
    setIsSharing(false);
  };

  const openShareModal = (initialDocIds = []) => {
    const fromList = listSelectedDocIds.length > 0 ? listSelectedDocIds : initialDocIds;
    setShareSelectedDocIds(fromList);
    setShareModalOpen(true);
  };

  const toggleListDocSelection = (docId) => {
    setListSelectedDocIds((prev) =>
      prev.includes(docId) ? prev.filter((id) => id !== docId) : [...prev, docId]
    );
  };

  const handleFileSelect = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setPendingFile(file);
    setUploadTitle(defaultTitleFromFileName(file.name));
    setUploadModalOpen(true);
  };

  const handleConfirmUpload = async () => {
    if (!pendingFile) return;
    const title = uploadTitle.trim();
    if (!title) {
      setApiError('Enter a name for this document.');
      return;
    }

    setIsUploading(true);
    setApiError(null);

    try {
      const resp = await uploadVaultDocument({ file: pendingFile, title });
      setDocuments((prev) => [resp.data.document, ...prev]);
      setTotalCount((c) => c + 1);
      closeUploadModal();
    } catch (e) {
      if (e.message?.includes('Session expired')) {
        onSessionExpired();
        return;
      }
      setApiError(e.message || 'Upload failed');
    } finally {
      setIsUploading(false);
    }
  };

  const handleConfirmShare = async () => {
    const username = shareUsername.trim();
    const password = sharePassword;
    if (!username || password.length < 8) {
      setApiError('Enter a username and password (at least 8 characters).');
      return;
    }
    if (shareSelectedDocIds.length === 0) {
      setApiError('Select at least one document to share.');
      return;
    }

    setIsSharing(true);
    setApiError(null);

    try {
      const resp = await createVaultGuestAccess({
        username,
        password,
        documentIds: shareSelectedDocIds,
      });
      const sharedDocs = documents.filter((d) => shareSelectedDocIds.includes(d.id));
      setShareResult({
        username,
        password,
        documentNames: sharedDocs.map(displayName),
        expiresAt: resp.data.expiresAt,
      });
      setListSelectedDocIds([]);
      closeShareModal();
      loadGuestAccess();
    } catch (e) {
      if (e.message?.includes('Session expired')) {
        onSessionExpired();
        return;
      }
      setApiError(e.message || 'Failed to create guest access');
    } finally {
      setIsSharing(false);
    }
  };

  const handleRevokeGuest = async (guestId) => {
    try {
      await revokeVaultGuestAccess({ id: guestId });
      setGuestAccess((prev) => prev.filter((g) => g.id !== guestId));
    } catch (e) {
      if (e.message?.includes('Session expired')) {
        onSessionExpired();
        return;
      }
      setApiError(e.message || 'Failed to revoke guest access');
    }
  };

  const guestForDocument = (docId) =>
    guestAccess.find((g) => g.documents?.some((d) => d.id === docId));

  const isDocShared = (docId) => !!guestForDocument(docId);

  const emptyMessage = isGuest
    ? 'No document has been assigned to your account.'
    : 'No documents yet. Upload your first file.';

  return (
    <Box sx={pageStyles.pageContainer}>
      <Paper sx={pageStyles.panel}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 3, mt: 1 }}>
          <Box>
            <Typography variant="h4" fontWeight={800}>
              Vault
            </Typography>
            <Typography color="text.secondary" sx={{ mt: 0.5 }}>
              {isGuest
                ? `Your shared document${totalCount === 1 ? '' : 's'}`
                : `${totalCount} document${totalCount === 1 ? '' : 's'} stored in AWS`}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            {isAdmin && listSelectedDocIds.length > 0 && (
              <Button
                variant="outlined"
                size="small"
                startIcon={<ShareIcon />}
                onClick={() => openShareModal()}
              >
                Share selected ({listSelectedDocIds.length})
              </Button>
            )}
            <Typography variant="body2" color="text.secondary">
              {session.username}
            </Typography>
            <Tooltip title="Sign out">
              <IconButton onClick={onLogout} size="small">
                <LogoutIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Box>

        {isGuest && session.expiresAt && (
          <Alert severity="info" sx={{ mb: 2 }}>
            Your access expires on {formatExpiryDate(session.expiresAt)}.
          </Alert>
        )}

        {apiError && (
          <Alert
            severity="error"
            sx={{ mb: 2 }}
            action={
              <Button color="inherit" size="small" onClick={loadDocuments}>
                Retry
              </Button>
            }
            onClose={() => setApiError(null)}
          >
            {apiError}
          </Alert>
        )}

        {isLoading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', py: 8 }}>
            <CircularProgress />
          </Box>
        ) : documents.length === 0 ? (
          <Box sx={{ textAlign: 'center', py: 8 }}>
            <FolderOpenIcon sx={{ fontSize: 56, color: 'var(--text-tertiary)', mb: 2 }} />
            <Typography color="text.secondary">{emptyMessage}</Typography>
          </Box>
        ) : (
          <List disablePadding>
            {documents.map((doc) => {
              const Icon = mimeIcon(doc.mimeType);
              const sharedGuest = isAdmin ? guestForDocument(doc.id) : null;
              const isShared = isAdmin && isDocShared(doc.id);
              return (
                <ListItem
                  key={doc.id}
                  sx={pageStyles.docRow}
                  secondaryAction={
                    <Box>
                      <Tooltip title="Open">
                        <IconButton edge="end" onClick={() => handleOpen(doc)} sx={{ mr: 0.5 }}>
                          <OpenInNewIcon />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Download">
                        <IconButton edge="end" onClick={() => handleDownload(doc)} sx={{ mr: 0.5 }}>
                          <DownloadIcon />
                        </IconButton>
                      </Tooltip>
                      {isAdmin && (
                        <>
                          <Tooltip title={isShared ? 'Already shared' : 'Share access'}>
                            <span>
                              <IconButton
                                edge="end"
                                onClick={() => openShareModal([doc.id])}
                                sx={{ mr: 0.5 }}
                                disabled={isShared}
                              >
                                <ShareIcon />
                              </IconButton>
                            </span>
                          </Tooltip>
                          <Tooltip title="Delete">
                            <IconButton edge="end" onClick={() => setDeleteTarget(doc)} color="error">
                              <DeleteIcon />
                            </IconButton>
                          </Tooltip>
                        </>
                      )}
                    </Box>
                  }
                >
                  <ListItemIcon>
                    {isAdmin ? (
                      <Checkbox
                        edge="start"
                        checked={listSelectedDocIds.includes(doc.id)}
                        onChange={() => toggleListDocSelection(doc.id)}
                        disabled={isShared}
                        sx={{ mr: 0.5 }}
                      />
                    ) : null}
                    <Box
                      sx={{
                        width: 44,
                        height: 44,
                        borderRadius: 2,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'var(--bg-secondary)',
                      }}
                    >
                      <Icon sx={{ color: '#f50057' }} />
                    </Box>
                  </ListItemIcon>
                  <ListItemText
                    primary={displayName(doc)}
                    secondary={
                      <>
                        {doc.title?.trim() && (
                          <Typography component="span" variant="caption" display="block" sx={{ opacity: 0.55 }}>
                            {doc.originalName}
                          </Typography>
                        )}
                        {formatBytes(doc.sizeBytes)} · {new Date(doc.createdAt).toLocaleDateString()}
                        {sharedGuest && (
                          <Typography component="span" variant="caption" display="block" sx={{ opacity: 0.7 }}>
                            Shared with {sharedGuest.username} (expires {formatExpiryDate(sharedGuest.expiresAt)})
                          </Typography>
                        )}
                      </>
                    }
                    primaryTypographyProps={{ fontWeight: 600 }}
                  />
                </ListItem>
              );
            })}
          </List>
        )}

        {isAdmin && guestAccess.length > 0 && (
          <>
            <Divider sx={{ my: 3 }} />
            <Typography variant="h6" fontWeight={700} gutterBottom>
              Active guest access
            </Typography>
            <List disablePadding>
              {guestAccess.map((guest) => (
                <ListItem
                  key={guest.id}
                  sx={pageStyles.docRow}
                  secondaryAction={
                    <Tooltip title="Revoke access">
                      <IconButton edge="end" onClick={() => handleRevokeGuest(guest.id)} color="error">
                        <DeleteIcon />
                      </IconButton>
                    </Tooltip>
                  }
                >
                  <ListItemText
                    primary={guest.username}
                    secondary={
                      guest.documents?.length
                        ? `${guest.documents.map(displayName).join(', ')} · expires ${formatExpiryDate(guest.expiresAt)}`
                        : `Expires ${formatExpiryDate(guest.expiresAt)}`
                    }
                  />
                </ListItem>
              ))}
            </List>
          </>
        )}
      </Paper>

      {isAdmin && (
        <>
          <input
            ref={fileInputRef}
            type="file"
            hidden
            accept=".pdf,.doc,.docx,.txt,image/*"
            onChange={handleFileSelect}
          />

          <Fab
            color="primary"
            aria-label="upload"
            onClick={() => fileInputRef.current?.click()}
            disabled={isUploading}
            sx={{
              position: 'fixed',
              bottom: 32,
              right: 32,
              background: 'linear-gradient(45deg, #f50057 30%, #c51162 90%)',
            }}
          >
            {isUploading ? <CircularProgress size={24} color="inherit" /> : <UploadFileIcon />}
          </Fab>
        </>
      )}

      <Dialog open={uploadModalOpen} onClose={closeUploadModal} maxWidth="sm" fullWidth>
        <DialogTitle>Name your document</DialogTitle>
        <DialogContent>
          {pendingFile && (
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              File: {pendingFile.name}
            </Typography>
          )}
          <TextField
            autoFocus
            fullWidth
            label="Document name"
            value={uploadTitle}
            onChange={(e) => setUploadTitle(e.target.value)}
            inputProps={{ maxLength: 120 }}
            disabled={isUploading}
            sx={pageStyles.textField}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={closeUploadModal} disabled={isUploading}>
            Cancel
          </Button>
          <Button
            onClick={handleConfirmUpload}
            variant="contained"
            disabled={isUploading || !uploadTitle.trim()}
          >
            {isUploading ? <CircularProgress size={20} /> : 'Upload'}
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={!!deleteTarget} onClose={() => setDeleteTarget(null)}>
        <DialogTitle>Delete document</DialogTitle>
        <DialogContent>
          <Typography>
            Remove &ldquo;{deleteTarget ? displayName(deleteTarget) : ''}&rdquo; from the vault?
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteTarget(null)}>Cancel</Button>
          <Button onClick={handleConfirmDelete} color="error" variant="contained">
            Delete
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={shareModalOpen} onClose={closeShareModal} maxWidth="sm" fullWidth>
        <DialogTitle>Share document access</DialogTitle>
        <DialogContent>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            Guest access lasts 14 days and does not refresh on login.
          </Typography>
          <TextField
            autoFocus
            fullWidth
            label="Guest username"
            value={shareUsername}
            onChange={(e) => setShareUsername(e.target.value)}
            sx={{ ...pageStyles.textField, mb: 2 }}
            disabled={isSharing}
          />
          <TextField
            fullWidth
            label="Guest password"
            type="password"
            value={sharePassword}
            onChange={(e) => setSharePassword(e.target.value)}
            helperText="At least 8 characters"
            sx={pageStyles.textField}
            disabled={isSharing}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={closeShareModal} disabled={isSharing}>
            Cancel
          </Button>
          <Button
            onClick={handleConfirmShare}
            variant="contained"
            disabled={
              isSharing ||
              !shareUsername.trim() ||
              sharePassword.length < 8 ||
              shareSelectedDocIds.length === 0
            }
          >
            {isSharing ? <CircularProgress size={20} /> : 'Create access'}
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={!!shareResult} onClose={() => setShareResult(null)} maxWidth="sm" fullWidth>
        <DialogTitle>Guest access created</DialogTitle>
        <DialogContent>
          {shareResult && (
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              <Typography>
                Share these credentials with the guest. The password will not be shown again.
              </Typography>
              <Typography>
                <strong>Documents:</strong> {shareResult.documentNames.join(', ')}
              </Typography>
              <Typography>
                <strong>Username:</strong> {shareResult.username}
              </Typography>
              <Typography>
                <strong>Password:</strong> {shareResult.password}
              </Typography>
              <Typography color="text.secondary">
                Expires: {formatExpiryDate(shareResult.expiresAt)}
              </Typography>
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShareResult(null)} variant="contained">
            Done
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default function Vault() {
  const [session, setSession] = useState(null);
  const [checkingSession, setCheckingSession] = useState(true);

  useEffect(() => {
    const restoreSession = async () => {
      if (!getVaultToken()) {
        setCheckingSession(false);
        return;
      }

      try {
        const resp = await fetchVaultMe();
        setSession({
          username: resp.data.username,
          role: resp.data.role,
          expiresAt: resp.data.expiresAt ?? null,
          documentIds: resp.data.documentIds ?? [],
        });
      } catch {
        clearVaultSession();
        setSession(null);
      } finally {
        setCheckingSession(false);
      }
    };

    restoreSession();
  }, []);

  const handleLogin = (loginSession) => {
    setSession(loginSession);
  };

  const handleLogout = async () => {
    try {
      await vaultLogout();
    } catch {
      clearVaultSession();
    }
    setSession(null);
  };

  const handleSessionExpired = () => {
    clearVaultSession();
    setSession(null);
  };

  if (checkingSession) {
    return (
      <Box sx={{ ...pageStyles.pageContainer, justifyContent: 'center' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (!session?.username) {
    return <VaultLogin onLogin={handleLogin} />;
  }

  return (
    <VaultDashboard
      session={session}
      onLogout={handleLogout}
      onSessionExpired={handleSessionExpired}
    />
  );
}
