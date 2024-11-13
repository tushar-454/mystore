'use client';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from '@/components/ui/input-otp';
import { sendEmailOTP, verifySceret } from '@/lib/actions/user.action';
import images from '@/public/index';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Button } from './ui/button';

const OTPModal = ({
  email,
  accountId,
}: {
  email: string;
  accountId: string;
}) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(true);
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      // call API to verify OTP
      const sessionId = await verifySceret({ accountId, password });
      if (sessionId) router.push('/');
    } catch (error) {
      console.log('Failed to verify OTP');
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendOtp = async () => {
    // Call API to resend OTP
    await sendEmailOTP(email);
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogContent className='shad-alert-dialog'>
        <AlertDialogHeader className='relative flex justify-center'>
          <AlertDialogTitle className='h2 text-center'>
            Enter your OTP
            <Image
              src={images.close}
              alt='close'
              width={20}
              height={20}
              onClick={() => setIsOpen(false)}
              className='otp-close-button'
            />
          </AlertDialogTitle>
          <AlertDialogDescription className='subtitle-2 text-center text-light-100'>
            We've sent a code to{' '}
            <span className='pl-1 text-brand'>{email}</span>
          </AlertDialogDescription>
        </AlertDialogHeader>

        <InputOTP maxLength={6} value={password} onChange={setPassword}>
          <InputOTPGroup className='shad-otp'>
            <InputOTPSlot index={0} className='shad-otp-slot' />
            <InputOTPSlot index={1} className='shad-otp-slot' />
            <InputOTPSlot index={2} className='shad-otp-slot' />
            <InputOTPSlot index={3} className='shad-otp-slot' />
            <InputOTPSlot index={4} className='shad-otp-slot' />
            <InputOTPSlot index={5} className='shad-otp-slot' />
          </InputOTPGroup>
        </InputOTP>

        <AlertDialogFooter>
          <div className='flex w-full flex-col gap-4'>
            <AlertDialogAction
              onClick={handleSubmit}
              className='shad-submit-btn h-12'
              type='button'
            >
              Submit
              {isLoading && (
                <Image
                  src={images.loader}
                  alt='loader'
                  width={24}
                  height={24}
                  className='ml-2 animate-spin'
                />
              )}
            </AlertDialogAction>
            <div className='subtitle-2 mt-2 text-center text-light-100'>
              Didn't receive the code?{' '}
              <Button
                type='button'
                variant='link'
                className='pl-1 text-brand'
                onClick={handleResendOtp}
              >
                Click to resend
              </Button>
            </div>
          </div>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default OTPModal;
