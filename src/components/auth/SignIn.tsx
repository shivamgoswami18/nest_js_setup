"use client";

import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import BaseInput from "@/components/base/BaseInput";
import BaseButton from "@/components/base/BaseButton";
import { signInApi } from "@/lib/api/AuthApi";
import {
  checkStatusCodeSuccess,
  commonLabel,
  errorHandler,
  getItem,
  setItem,
} from "@/components/constants/Common";
import { toast } from "react-toastify";
import { emailRegex } from "@/components/constants/Validation";
import { routePath } from "@/components/constants/RoutePath";
import { MarketplaceLogo } from "@/assets/icons/CommonIcons";
import { jwtDecode } from "jwt-decode";
import { useTranslation } from "@/i18n/i18n";

interface JWTPayload {
  role: string;
}

const SignIn = () => {
  const [btnLoader, setBtnLoader] = useState<boolean>(false);
  const router = useRouter();
  const device_token = getItem("device_token") ?? "";
  const { t } = useTranslation();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required(t("validation.required", { field: t("signInLabel.email") }))
        .matches(
          emailRegex,
          t("validation.format", { field: t("signInLabel.email") })
        ),
      password: Yup.string().required(
        t("validation.required", { field: t("signInLabel.password") })
      ),
    }),
    onSubmit: (values: { email: string; password: string }) => {
      setBtnLoader(true);
      const payload = {
        email: values.email,
        password: values.password,
        device_token,
      };

      signInApi(payload)
        .then((res) => {
          const message = res?.message;
          const tokenData = res?.data?.token;
          if (checkStatusCodeSuccess(res?.statusCode)) {
            const decoded = jwtDecode<JWTPayload>(tokenData);
            if (decoded?.role === t("signInPageConstants.userRole")) {
              toast.success(message);
              setItem(commonLabel.Token, tokenData);
              router.push(routePath.Dashboard);
            } else {
              toast.error(t("signInPageConstants.adminAccessDenied"));
            }
          } else {
            toast.error(message);
          }
        })
        .catch((err) => {
          errorHandler(err);
        })
        .finally(() => {
          setBtnLoader(false);
        });
    },
  });

  return (
    <div className="flex min-h-screen w-full bg-light">
      <div className="w-full flex items-center justify-center px-6 sm:px-12 py-5">
        <div className="w-full max-w-md">
          <div className="mb-[30px] text-black">
            <p className="mb-[40px]">
              <MarketplaceLogo />
            </p>
            <p className="text-titleLg font-semiBold mb-[19px] leading-[100%] tracking-[-0.05rem]">
              {t("signInPageConstants.signIntoYourAccount")}
            </p>
            <p className="text-textSm font-light leading-[100%] tracking-[-0.03rem]">
              {t("signInPageConstants.enterYourEmailAndPasswordToLogIn")}
            </p>
          </div>

          <form onSubmit={formik.handleSubmit}>
            <BaseInput
              label={t("signInLabel.email")}
              name="email"
              type="email"
              placeholder={t("validation.placeholder", {
                field: t("signInLabel.email"),
              })}
              onChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              value={formik.values.email}
              error={formik.errors.email}
              touched={formik.touched.email}
              fullWidth
            />

            <BaseInput
              label={t("signInLabel.password")}
              name="password"
              type="password"
              placeholder={t("validation.placeholder", {
                field: t("signInLabel.password"),
              })}
              onChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              value={formik.values.password}
              error={formik.errors.password}
              touched={formik.touched.password}
              fullWidth
              labelClassName="mt-[16px]"
            />

            <BaseButton
              onClick={() => router.push("/forgot-password")}
              className="!text-primary font-semibold cursor-pointer bg-transparent border-none text-mini mt-[16px] mb-[31px] rounded-none leading-[140%] tracking-[-0.01rem]"
              label={t("signInPageConstants.forgotPassword")}
              noPadding={true}
              divClass="text-end"
            />

            <BaseButton
              type="submit"
              className="w-full rounded-custom !bg-primary text-white text-textBase font-semibold flex justify-center items-center !py-padSm leading-[140%] tracking-[-0.01rem]"
              label={t("signInPageConstants.logIn")}
              loader={btnLoader}
            />
          </form>

          <div className="flex justify-center items-center mt-[37px] gap-2">
            <p className="text-center text-mini text-gray font-medium leading-[140%] tracking-[-0.01rem]">
              {t("signInPageConstants.doNotHaveAnAccount")}{" "}
            </p>
            <BaseButton
              onClick={() => router.push("/signup")}
              className="!text-primary font-semibold cursor-pointer bg-transparent border-none rounded-none p-0 m-0 text-mini pb-0.5 leading-[140%] tracking-[-0.01rem]"
              label={t("signInPageConstants.signUp")}
              noPadding={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
