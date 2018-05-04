// @flow

type OAuthToken = {
  token_type: "bearer",
  access_token: string,
  expires_in: 3600,
  refresh_token: string
};

type APIResponse<T> = {
  success: boolean,
  data: T
};

const CLIENT_ID = "80167133215";
const CLIENT_SECRET = "MPY871FM1X4V5U7M9YQ1GK123Q1YR5WRPJZ18334GVDL3UXVYUR2AXWALXRX921P";
const API_PREFIX = "https://api-de-tm01.urbansportsclub.com/api/v4";

export async function authenticate(
  username: string,
  password: string
): Promise<OAuthToken> {
  const formData = new FormData();
  formData.append("grant_type", "password");
  formData.append("username", username);
  formData.append("password", password);
  formData.append("client_id", CLIENT_ID);
  formData.append("client_secret", CLIENT_SECRET);

  const res = await fetch(`${API_PREFIX}/auth/token`, {
    method: "POST",
    body: formData
  });
  if (res.status !== 200) {
    throw new Error(`Couldn't get auth token: ${await res.text()}`);
  }
  const json: APIResponse<OAuthToken> = await res.json();
  return json.data;
}

export async function getAccessToken(
  username: string,
  password: string
): Promise<string> {
  return (await authenticate(username, password)).access_token;
}

export async function apiFetch(
  url: string,
  accessToken: string,
  options: RequestOptions = {}
) {
  if (options.headers == null) {
    options.headers = {};
  }
  options.headers.Authorization = `Bearer ${accessToken}`;
  const res = await fetch(`${API_PREFIX}${url}`, options);
  if (res.status !== 200) {
    throw new Error(`Request failed: ${await res.text()}`);
  }
  return (await res.json()).data;
}
