/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Plantation } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PlantationUpdateFormInputValues = {
    lib?: string;
};
export declare type PlantationUpdateFormValidationValues = {
    lib?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PlantationUpdateFormOverridesProps = {
    PlantationUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    lib?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PlantationUpdateFormProps = React.PropsWithChildren<{
    overrides?: PlantationUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    plantation?: Plantation;
    onSubmit?: (fields: PlantationUpdateFormInputValues) => PlantationUpdateFormInputValues;
    onSuccess?: (fields: PlantationUpdateFormInputValues) => void;
    onError?: (fields: PlantationUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PlantationUpdateFormInputValues) => PlantationUpdateFormInputValues;
    onValidate?: PlantationUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PlantationUpdateForm(props: PlantationUpdateFormProps): React.ReactElement;
