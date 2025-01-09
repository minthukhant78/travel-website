// import SignInForm from '@/components/SignInForm'
import SignInForm from '@/app/components/SignInForm'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sign In',
  description: 'Sign in to your account',
}

export default function SignInPage() {
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">Welcome back</h1>
        <p className="text-sm text-muted-foreground">
          Enter your email to sign in to your account
        </p>
      </div>
      <SignInForm />
      <p className="mt-4 text-center text-sm text-muted-foreground">
        <a href="/sign-up" className="hover:text-brand underline underline-offset-4">
          Don&apos;t have an account? Sign Up
        </a>
      </p>
    </div>
  )
}

