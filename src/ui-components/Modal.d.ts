/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ModalOverridesProps = {
    Modal?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 3357"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 4"?: PrimitiveOverrideProps<ImageProps>;
    "Rectangle 5"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 6"?: PrimitiveOverrideProps<ViewProps>;
    Enregistrer462?: PrimitiveOverrideProps<TextProps>;
    Enregistrer62?: PrimitiveOverrideProps<TextProps>;
    Commentaire?: PrimitiveOverrideProps<TextProps>;
    IMG1?: PrimitiveOverrideProps<TextProps>;
    "Plantation 1"?: PrimitiveOverrideProps<TextProps>;
    "14:00 - 01/12/2022"?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 3467"?: PrimitiveOverrideProps<ViewProps>;
    Sain?: PrimitiveOverrideProps<TextProps>;
    "Group 1"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 7"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 8"?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type ModalProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: ModalOverridesProps | undefined | null;
}>;
export default function Modal(props: ModalProps): React.ReactElement;
