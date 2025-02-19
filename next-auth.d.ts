import "next-auth";

declare module "next-auth" {
  interface User {
    role?: string;
  }

  interface Account {
    role?: string;
  }

  interface Credentials {
    role?: string;
  }
}