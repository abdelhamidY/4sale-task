import { FormikHelpers } from "formik";

export type UseFormikTypeProps<T> = {
  onSubmit: (values: T, formikHelpers: FormikHelpers<T>) => void | Promise<any>;
};
