const API_BASE_URL = 'http://localhost:3001';
// const API_BASE_URL = 'https://future.funyula.com';

const VAULT_TOKEN_KEY = 'vault_token';

export function getVaultToken() {
  return localStorage.getItem(VAULT_TOKEN_KEY);
}

export function setVaultToken(token) {
  localStorage.setItem(VAULT_TOKEN_KEY, token);
}

export function clearVaultSession() {
  localStorage.removeItem(VAULT_TOKEN_KEY);
}

function authHeaders() {
  const token = getVaultToken();
  const headers = {};
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  return headers;
}

async function parseError(response) {
  const body = await response.json().catch(() => null);
  return body?.message || `HTTP error! status: ${response.status}`;
}

async function vaultFetch(url, options = {}) {
  const response = await fetch(url, {
    ...options,
    headers: {
      ...authHeaders(),
      ...options.headers,
    },
  });

  if (response.status === 401) {
    clearVaultSession();
    throw new Error('Session expired. Please sign in again.');
  }

  if (!response.ok) {
    throw new Error(await parseError(response));
  }

  return response.json();
}

export async function vaultLogin({ username, password }) {
  const response = await fetch(`${API_BASE_URL}/api/rise-reports/vault/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  });

  if (!response.ok) {
    throw new Error(await parseError(response));
  }

  const data = await response.json();
  if (data?.data?.token) {
    setVaultToken(data.data.token);
  }
  return data;
}

export async function vaultLogout() {
  try {
    await vaultFetch(`${API_BASE_URL}/api/rise-reports/vault/auth/logout`, {
      method: 'POST',
    });
  } finally {
    clearVaultSession();
  }
}

export async function fetchVaultMe() {
  return vaultFetch(`${API_BASE_URL}/api/rise-reports/vault/auth/me`);
}

export async function fetchVaultDocuments({ page = 1, limit = 50 } = {}) {
  const query = new URLSearchParams({
    page: String(page),
    limit: String(limit),
  });

  return vaultFetch(
    `${API_BASE_URL}/api/rise-reports/vault/documents?${query.toString()}`
  );
}

export async function fetchVaultDocumentViewUrl(id) {
  return vaultFetch(
    `${API_BASE_URL}/api/rise-reports/vault/documents/${encodeURIComponent(id)}/view-url`
  );
}

export async function uploadVaultDocument({ file, title }) {
  const form = new FormData();
  form.append('file', file);
  if (title?.trim()) {
    form.append('title', title.trim());
  }

  return vaultFetch(`${API_BASE_URL}/api/rise-reports/vault/documents`, {
    method: 'POST',
    body: form,
  });
}

export async function deleteVaultDocument({ id }) {
  return vaultFetch(`${API_BASE_URL}/api/rise-reports/vault/documents`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id }),
  });
}

export async function createVaultGuestAccess({ username, password, documentIds }) {
  return vaultFetch(`${API_BASE_URL}/api/rise-reports/vault/guest-access`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password, documentIds }),
  });
}

export async function fetchVaultGuestAccess() {
  return vaultFetch(`${API_BASE_URL}/api/rise-reports/vault/guest-access`);
}

export async function addVaultGuestDocuments({ guestId, documentIds }) {
  return vaultFetch(
    `${API_BASE_URL}/api/rise-reports/vault/guest-access/${encodeURIComponent(guestId)}/documents`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ documentIds }),
    }
  );
}

export async function revokeVaultGuestAccess({ id }) {
  return vaultFetch(`${API_BASE_URL}/api/rise-reports/vault/guest-access/${encodeURIComponent(id)}`, {
    method: 'DELETE',
  });
}
