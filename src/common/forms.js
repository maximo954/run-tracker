const Fields = () => {
  const fields = [
    {
      label: "Email",
      name: "email",
      message: "You must provide email!",
      placeholder: "john@example.com"
    },
    {
      label: "Password",
      name: "password",
      message: "You must provide password!",
      placeholder: "sample123"
    }
  ];
  return fields;
};

const LoginFields = ["email", "password"];

export const LoginForm = Fields()
  .map()
  .filter(key => LoginFields.includes(key.name));
