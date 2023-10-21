/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CardComponentOverridesProps = {
    CardComponent?: PrimitiveOverrideProps<ViewProps>;
    "IMG-1054 1"?: PrimitiveOverrideProps<ImageProps>;
    "Rectangle 1"?: PrimitiveOverrideProps<ViewProps>;
    IMG1?: PrimitiveOverrideProps<TextProps>;
    "Plantation 1"?: PrimitiveOverrideProps<TextProps>;
    "14:00 - 01/12/2022"?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 2"?: PrimitiveOverrideProps<ViewProps>;
    Sain?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type CardComponentProps = React.PropsWithChildren<Partial<ViewProps> & {
    iMAGE?: any;
} & {
    overrides?: CardComponentOverridesProps | undefined | null;
}>;
export default function CardComponent(props: CardComponentProps): React.ReactElement;
