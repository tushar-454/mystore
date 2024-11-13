'use client';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { createAccount } from '@/lib/actions/user.action';
import images from '@/public/index';
import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import OTPModal from './OTPModal';

type FormType = 'sign-up' | 'sign-in';

const authFormSchema = (formType: FormType) => {
  return z.object({
    email: z.string().email(),
    fullName:
      formType === 'sign-up'
        ? z.string().min(2).max(50)
        : z.string().optional(),
  });
};

const AuthForm = ({ type }: { type: FormType }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [errroMessage, setErrorMessage] = useState('');
  const [accountId, setAccountId] = useState(null);

  const formSchema = authFormSchema(type);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      email: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    setErrorMessage('');
    try {
      const user = await createAccount({
        fullName: values.fullName || '',
        email: values.email,
      });
      setAccountId(user.accountId);
    } catch (error) {
      setErrorMessage('Failed to create an account. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='auth-form'>
          <h1 className='form-title'>
            {type === 'sign-up' ? 'Sign Up' : 'Sign In'}
          </h1>
          {type === 'sign-up' && (
            <>
              <FormField
                control={form.control}
                name='fullName'
                render={({ field }) => (
                  <FormItem>
                    <div className='shad-form-item'>
                      <FormLabel className='shad-form-label'>
                        Full Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder='Enter your full name'
                          className='shad-input'
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className='shad-form-message' />
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <div className='shad-form-item'>
                      <FormLabel className='shad-form-label'>Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder='Enter your email'
                          className='shad-input'
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className='shad-form-message' />
                    </div>
                  </FormItem>
                )}
              />
            </>
          )}
          {type === 'sign-in' && (
            <>
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <div className='shad-form-item'>
                      <FormLabel className='shad-form-label'>Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder='Enter your email'
                          className='shad-input'
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className='shad-form-message' />
                    </div>
                  </FormItem>
                )}
              />
            </>
          )}
          <Button
            type='submit'
            disabled={isLoading}
            className='form-submit-button disabled:cursor-not-allowed'
          >
            {type === 'sign-up' ? 'Sign Up' : 'Sign In'}
            {isLoading && (
              <Image
                src={images.loader}
                width={24}
                height={24}
                alt='loader'
                className='ml-2 animate-spin'
              />
            )}
          </Button>
          {errroMessage && <p className='error-message'>*{errroMessage}</p>}
          <div className='body-2 flex justify-center'>
            <p className='text-light-100'>
              {type === 'sign-up'
                ? 'Already have an account?'
                : `Don't have an account?`}
              <Link
                href={type === 'sign-in' ? '/sign-up' : 'sign-in'}
                className='ml-1 font-medium text-brand'
              >
                {type === 'sign-up' ? 'Sign In' : 'Sign Up'}
              </Link>
            </p>
          </div>
        </form>
      </Form>
      {/* OTP validation */}
      {accountId && (
        <OTPModal email={form.getValues('email')} accountId={accountId} />
      )}
    </>
  );
};

export default AuthForm;
