// const API_BASE_URL = 'http://localhost:3001';
const API_BASE_URL = 'https://future.funyula.com';

const VAULT_SESSION_KEY = 'vault_session';

export function getVaultSession() {
  const raw = localStorage.getItem(VAULT_SESSION_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export function setVaultSession({ username }) {
  localStorage.setItem(VAULT_SESSION_KEY, JSON.stringify({ username }));
}

export function clearVaultSession() {
  localStorage.removeItem(VAULT_SESSION_KEY);
}

async function parseError(response) {
  const body = await response.json().catch(() => null);
  return body?.message || `HTTP error! status: ${response.status}`;
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
  if (data?.data?.username) {
    setVaultSession({ username: data.data.username });
  }
  return data;
}

export async function fetchVaultDocuments({ page = 1, limit = 50 } = {}) {
  const query = new URLSearchParams({
    page: String(page),
    limit: String(limit),
  });

  const response = await fetch(
    `${API_BASE_URL}/api/rise-reports/vault/documents?${query.toString()}`
  );

  if (!response.ok) {
    throw new Error(await parseError(response));
  }

  return response.json();
}

export async function fetchVaultDocumentViewUrl(id) {
  const response = await fetch(
    `${API_BASE_URL}/api/rise-reports/vault/documents/${encodeURIComponent(id)}/view-url`
  );

  if (!response.ok) {
    throw new Error(await parseError(response));
  }

  return response.json();
}

export async function uploadVaultDocument({ file, title }) {
  const form = new FormData();
  form.append('file', file);
  if (title?.trim()) {
    form.append('title', title.trim());
  }

  const response = await fetch(`${API_BASE_URL}/api/rise-reports/vault/documents`, {
    method: 'POST',
    body: form,
  });

  if (!response.ok) {
    throw new Error(await parseError(response));
  }

  return response.json();
}

export async function deleteVaultDocument({ id }) {
  const response = await fetch(`${API_BASE_URL}/api/rise-reports/vault/documents`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id }),
  });

  if (!response.ok) {
    throw new Error(await parseError(response));
  }

  return response.json();
}
