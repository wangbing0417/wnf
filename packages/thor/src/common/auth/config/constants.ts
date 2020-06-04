const porchBaeUrl = 'http://porch2.sit.qa.xiaohongshu.com';
const loginBaseUrl = 'http://login2.sit.qa.xiaohongshu.com';

export const authUrl = `${porchBaeUrl}/api/user/sessions`;
export const validateUrl = `${loginBaseUrl}/api/cas/internal_validate`;
export const subsystemsUrl = `${porchBaeUrl}/api/subsystems`;
export const loginUrl = `${loginBaseUrl}/login`;
export const logoutUrl = `${loginBaseUrl}/logout`;
export const unauthorizedMessage = `请至https://oa.xiaohongshu.com申请权限`;