import { redirect } from 'next/navigation';

import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';

import { CheckCircle, ChevronRight } from 'lucide-react';
import { toast } from 'sonner';

import {
  AppBar,
  AppBarBack,
  AppBarTitle,
} from '@/components/additional-ui/app-bar';
import { Button } from '@/components/ui/button';
import { SURVEY_FORM_NAME } from '@/constants/form';
import { TOAST_MESSAGES } from '@/constants/messages';
import { ROUTES } from '@/constants/routes';
import { type PropsWithOnNext } from '@/types/props';

const SubmitStep = ({ onNext }: PropsWithOnNext) => {
  const {
    formState: { isSubmitting },
    getValues,
  } = useFormContext();

  useEffect(() => {
    if (
      [
        SURVEY_FORM_NAME.AGE,
        SURVEY_FORM_NAME.GENDER,
        SURVEY_FORM_NAME.MBTI,
        SURVEY_FORM_NAME.CHILDHOOD_DREAM,
        SURVEY_FORM_NAME.MOST_IMPORTANT_VALUE,
        SURVEY_FORM_NAME.LIFE_SATISFACTION,
        // SURVEY_FORM_NAME.EMAIL,
      ].some((key) => getValues(key) === undefined)
    ) {
      toast.error(TOAST_MESSAGES.INVALID_STEP);

      redirect(ROUTES.ROOT);
    }
  }, []);

  return (
    <div className="flex flex-col items-center gap-4">
      <AppBar>
        <AppBarBack />
        <AppBarTitle>우모어</AppBarTitle>
      </AppBar>
      <div className="flex w-full flex-col items-start gap-8 pt-14">
        <div className="mt-4 flex flex-col gap-4">
          <CheckCircle className="h-16 w-16" />
          <h1 className="text-2xl font-semibold">모든 설문을 완료했어요</h1>
        </div>
        <p>
          아래 <b>제출하기</b> 버튼을 누르면 설문이 제출됩니다.
        </p>
      </div>
      <Button
        type="submit"
        variant="secondary"
        onClick={onNext}
        disabled={isSubmitting}
        className="fixed inset-x-0 bottom-4 mx-auto w-full max-w-[calc(100vw-2rem)] sm:max-w-[calc(512px-2rem)]"
      >
        <ChevronRight className="mr-2 h-5 w-5" />
        제출하기
      </Button>
    </div>
  );
};

export default SubmitStep;
