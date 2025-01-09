// import SignUpForm from '@/components/SignUpForm'
import SignUpForm from '@/app/components/SignUpForm'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sign Up',
  description: 'Create a new account',
}

export default function SignUpPage() {
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">Create an account</h1>
          <p className="text-sm text-muted-foreground">
            Enter your email below to create your account
          </p>
        </div>
        <SignUpForm />
        <p className="px-8 text-center text-sm text-muted-foreground">
          By clicking continue, you agree to our{' '}
          <a href="/terms" className="hover:text-brand underline underline-offset-4">
            Terms of Service
          </a>{' '}
          and{' '}
          <a href="/privacy" className="hover:text-brand underline underline-offset-4">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  )
}

