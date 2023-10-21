/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type IMAGECreateFormInputValues = {
    nom?: string;
    scanned_at?: string;
    is_scanned?: boolean;
    is_safe?: boolean;
    image_path?: string;
    created_at?: string;
    coordinates?: string;
};
export declare type IMAGECreateFormValidationValues = {
    nom?: ValidationFunction<string>;
    scanned_at?: ValidationFunction<string>;
    is_scanned?: ValidationFunction<boolean>;
    is_safe?: ValidationFunction<boolean>;
    image_path?: ValidationFunction<string>;
    created_at?: ValidationFunction<string>;
    coordinates?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type IMAGECreateFormOverridesProps = {
    IMAGECreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    nom?: PrimitiveOverrideProps<TextFieldProps>;
    scanned_at?: PrimitiveOverrideProps<TextFieldProps>;
    is_scanned?: PrimitiveOverrideProps<SwitchFieldProps>;
    is_safe?: PrimitiveOverrideProps<SwitchFieldProps>;
    image_path?: PrimitiveOverrideProps<TextFieldProps>;
    created_at?: PrimitiveOverrideProps<TextFieldProps>;
    coordinates?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type IMAGECreateFormProps = React.PropsWithChildren<{
    overrides?: IMAGECreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: IMAGECreateFormInputValues) => IMAGECreateFormInputValues;
    onSuccess?: (fields: IMAGECreateFormInputValues) => void;
    onError?: (fields: IMAGECreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: IMAGECreateFormInputValues) => IMAGECreateFormInputValues;
    onValidate?: IMAGECreateFormValidationValues;
} & React.CSSProperties>;
export default function IMAGECreateForm(props: IMAGECreateFormProps): React.ReactElement;
