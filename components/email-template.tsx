interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const EmailTemplate = ({ name, email, message }: EmailTemplateProps) => (
  <div>
    <div>From: {name}</div>
    <div>Email: {email}</div>
    <div>Message:</div>
    <div>{message}</div>
  </div>
);
