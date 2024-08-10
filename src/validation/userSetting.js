import * as Yup from 'yup';

export const SettingSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[A-Za-z\s]+$/, "Name must contain only letters")
    .required('Name is required'),
  city: Yup.string().required('City is required'),
  phone: Yup.string()
    .matches(/^\d{1,12}$/, "Phone must be a valid number and less than or equal to 12 digits")
    .required('Phone is required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Email is required'),
  alternateEmail: Yup.string()
    .email('Invalid alternate email')
    .notOneOf([Yup.ref('email')], "Email and Alternate Email can't be the same")
    .required('Alternate email is required'),
  profileImage: Yup.mixed().required('Profile image is required')
});
