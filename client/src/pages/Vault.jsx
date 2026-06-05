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
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import InputAdornment from '@mui/material/InputAdornment';
import Fab from '@mui/material/Fab';
import Tooltip from '@mui/material/Tooltip';
import LockIcon from '@mui/icons-material/Lock';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import DeleteIcon from '@mui/icons-material/Delete';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import ImageIcon from '@mui/icons-material/Image';
import DescriptionIcon from '@mui/icons-material/Description';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import {
  clearVaultSession,
  deleteVaultDocument,
  fetchVaultDocumentViewUrl,
  fetchVaultDocuments,
  getVaultSession,
  uploadVaultDocument,
  vaultLogin,
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
      onLogin(resp.data.username);
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

function VaultDashboard({ username, onLogout }) {
  const [documents, setDocuments] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [apiError, setApiError] = useState(null);
  const [uploadModalOpen, setUploadModalOpen] = useState(false);
  const [pendingFile, setPendingFile] = useState(null);
  const [uploadTitle, setUploadTitle] = useState('');
  const [deleteTarget, setDeleteTarget] = useState(null);
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
      setApiError(e.message || 'Failed to load documents');
    } finally {
      if (requestId === requestIdRef.current) setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadDocuments();
  }, [loadDocuments]);

  const handleOpen = async (doc) => {
    try {
      const { data } = await fetchVaultDocumentViewUrl(doc.id);
      window.open(data.viewUrl, '_blank', 'noopener,noreferrer');
    } catch (e) {
      setApiError(e.message || 'Failed to get a secure view link');
    }
  };

  const handleConfirmDelete = async () => {
    if (!deleteTarget) return;
    try {
      await deleteVaultDocument({ id: deleteTarget.id });
      setDocuments((prev) => prev.filter((d) => d.id !== deleteTarget.id));
      setTotalCount((c) => Math.max(0, c - 1));
    } catch (e) {
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
      setApiError(e.message || 'Upload failed');
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <Box sx={pageStyles.pageContainer}>
      <Paper sx={pageStyles.panel}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 3, mt: 1 }}>
          <Box>
            <Typography variant="h4" fontWeight={800}>
              Vault
            </Typography>
            <Typography color="text.secondary" sx={{ mt: 0.5 }}>
              {totalCount} document{totalCount === 1 ? '' : 's'} stored in AWS
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Typography variant="body2" color="text.secondary">
              {username}
            </Typography>
            <Tooltip title="Sign out">
              <IconButton onClick={onLogout} size="small">
                <LogoutIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Box>

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
            <Typography color="text.secondary">
              No documents yet. Upload your first file.
            </Typography>
          </Box>
        ) : (
          <List disablePadding>
            {documents.map((doc) => {
              const Icon = mimeIcon(doc.mimeType);
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
                      <Tooltip title="Delete">
                        <IconButton edge="end" onClick={() => setDeleteTarget(doc)} color="error">
                          <DeleteIcon />
                        </IconButton>
                      </Tooltip>
                    </Box>
                  }
                >
                  <ListItemIcon>
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
                      </>
                    }
                    primaryTypographyProps={{ fontWeight: 600 }}
                  />
                </ListItem>
              );
            })}
          </List>
        )}
      </Paper>

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
    </Box>
  );
}

export default function Vault() {
  const [username, setUsername] = useState(null);
  const [checkingSession, setCheckingSession] = useState(true);

  useEffect(() => {
    const session = getVaultSession();
    if (session?.username) {
      setUsername(session.username);
    }
    setCheckingSession(false);
  }, []);

  const handleLogout = () => {
    clearVaultSession();
    setUsername(null);
  };

  if (checkingSession) {
    return (
      <Box sx={{ ...pageStyles.pageContainer, justifyContent: 'center' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (!username) {
    return <VaultLogin onLogin={setUsername} />;
  }

  return <VaultDashboard username={username} onLogout={handleLogout} />;
}
