/**
 * Email service — simplified (no SMTP/SES).
 * OTP codes are logged to the console only.
 */

export function sendOTPVerificationEmail(toEmail: string, otpCode: string): Promise<void> {
  console.log(`[DEV] Signup OTP for ${toEmail}: ${otpCode}`);
  return Promise.resolve();
}

export function sendPasswordResetEmail(toEmail: string, otpCode: string): Promise<void> {
  console.log(`[DEV] Password-reset OTP for ${toEmail}: ${otpCode}`);
  return Promise.resolve();
}
