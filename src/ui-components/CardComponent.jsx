/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Image, Text, View } from "@aws-amplify/ui-react";
export default function CardComponent(props) {
  const { iMAGE, overrides, ...rest } = props;
  return (
    <View
      width="321px"
      height="377px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "CardComponent")}
      {...rest}
    >
      <Image
        width="100%"
        height="81.43%"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="18.57%"
        left="0%"
        right="0%"
        borderRadius="5px 5px 0px 0px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src="https://plantimagebucket.s3.amazonaws.com/cocoa+images/Test/healthy/-5805312977254070922_121-14_19_18.jpg"
        {...getOverrideProps(overrides, "IMG-1054 1")}
      ></Image>
      <View
        width="321px"
        height="70px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="81.43%"
        bottom="0%"
        left="0%"
        right="0%"
        border="1px SOLID rgba(0,0,0,1)"
        borderRadius="0px 0px 5px 5px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Rectangle 1")}
      ></View>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="24px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="191px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="83.55%"
        bottom="10.08%"
        left="5.3%"
        right="35.2%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={iMAGE?.nom}
        {...getOverrideProps(overrides, "IMG1")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="500"
        color="rgba(0,0,0,1)"
        lineHeight="24px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="90.72%"
        bottom="2.92%"
        left="5.3%"
        right="66.98%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Plantation 1"
        {...getOverrideProps(overrides, "Plantation 1")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="500"
        color="rgba(0,0,0,1)"
        lineHeight="24px"
        textAlign="right"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="90.72%"
        bottom="2.92%"
        left="49.84%"
        right="4.67%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={iMAGE?.scanned_at}
        {...getOverrideProps(overrides, "14:00 - 01/12/2022")}
      ></Text>
      <View
        width="171px"
        height="29px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="83.02%"
        bottom="9.28%"
        left="42.06%"
        right="4.67%"
        borderRadius="5px"
        padding="0px 0px 0px 0px"
        backgroundColor={iMAGE?.is_safe == true ? "#00D900" : "red"}
        {...getOverrideProps(overrides, "Rectangle 2")}
      ></View>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="500"
        color="rgba(255,255,255,1)"
        lineHeight="24px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="161px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="83.55%"
        bottom="10.08%"
        left="43.61%"
        right="6.23%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={iMAGE?.is_safe == true ? "Sain" : "Infect\u00E9"}
        {...getOverrideProps(overrides, "Sain")}
      ></Text>
    </View>
  );
}
