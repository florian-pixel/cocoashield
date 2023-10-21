/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { fetchByPath, validateField } from "./utils";
import { API } from "aws-amplify";
import { getIMAGE } from "../graphql/queries";
import { updateIMAGE } from "../graphql/mutations";
export default function IMAGEUpdateForm(props) {
  const {
    id: idProp,
    iMAGE: iMAGEModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    nom: "",
    scanned_at: "",
    is_scanned: false,
    is_safe: false,
    image_path: "",
    created_at: "",
    coordinates: "",
  };
  const [nom, setNom] = React.useState(initialValues.nom);
  const [scanned_at, setScanned_at] = React.useState(initialValues.scanned_at);
  const [is_scanned, setIs_scanned] = React.useState(initialValues.is_scanned);
  const [is_safe, setIs_safe] = React.useState(initialValues.is_safe);
  const [image_path, setImage_path] = React.useState(initialValues.image_path);
  const [created_at, setCreated_at] = React.useState(initialValues.created_at);
  const [coordinates, setCoordinates] = React.useState(
    initialValues.coordinates
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = iMAGERecord
      ? { ...initialValues, ...iMAGERecord }
      : initialValues;
    setNom(cleanValues.nom);
    setScanned_at(cleanValues.scanned_at);
    setIs_scanned(cleanValues.is_scanned);
    setIs_safe(cleanValues.is_safe);
    setImage_path(cleanValues.image_path);
    setCreated_at(cleanValues.created_at);
    setCoordinates(cleanValues.coordinates);
    setErrors({});
  };
  const [iMAGERecord, setIMAGERecord] = React.useState(iMAGEModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await API.graphql({
              query: getIMAGE,
              variables: { id: idProp },
            })
          )?.data?.getIMAGE
        : iMAGEModelProp;
      setIMAGERecord(record);
    };
    queryData();
  }, [idProp, iMAGEModelProp]);
  React.useEffect(resetStateValues, [iMAGERecord]);
  const validations = {
    nom: [],
    scanned_at: [],
    is_scanned: [],
    is_safe: [],
    image_path: [],
    created_at: [],
    coordinates: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          nom: nom ?? null,
          scanned_at: scanned_at ?? null,
          is_scanned: is_scanned ?? null,
          is_safe: is_safe ?? null,
          image_path: image_path ?? null,
          created_at: created_at ?? null,
          coordinates: coordinates ?? null,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await API.graphql({
            query: updateIMAGE,
            variables: {
              input: {
                id: iMAGERecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "IMAGEUpdateForm")}
      {...rest}
    >
      <TextField
        label="Nom"
        isRequired={false}
        isReadOnly={false}
        value={nom}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nom: value,
              scanned_at,
              is_scanned,
              is_safe,
              image_path,
              created_at,
              coordinates,
            };
            const result = onChange(modelFields);
            value = result?.nom ?? value;
          }
          if (errors.nom?.hasError) {
            runValidationTasks("nom", value);
          }
          setNom(value);
        }}
        onBlur={() => runValidationTasks("nom", nom)}
        errorMessage={errors.nom?.errorMessage}
        hasError={errors.nom?.hasError}
        {...getOverrideProps(overrides, "nom")}
      ></TextField>
      <TextField
        label="Scanned at"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={scanned_at}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nom,
              scanned_at: value,
              is_scanned,
              is_safe,
              image_path,
              created_at,
              coordinates,
            };
            const result = onChange(modelFields);
            value = result?.scanned_at ?? value;
          }
          if (errors.scanned_at?.hasError) {
            runValidationTasks("scanned_at", value);
          }
          setScanned_at(value);
        }}
        onBlur={() => runValidationTasks("scanned_at", scanned_at)}
        errorMessage={errors.scanned_at?.errorMessage}
        hasError={errors.scanned_at?.hasError}
        {...getOverrideProps(overrides, "scanned_at")}
      ></TextField>
      <SwitchField
        label="Is scanned"
        defaultChecked={false}
        isDisabled={false}
        isChecked={is_scanned}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              nom,
              scanned_at,
              is_scanned: value,
              is_safe,
              image_path,
              created_at,
              coordinates,
            };
            const result = onChange(modelFields);
            value = result?.is_scanned ?? value;
          }
          if (errors.is_scanned?.hasError) {
            runValidationTasks("is_scanned", value);
          }
          setIs_scanned(value);
        }}
        onBlur={() => runValidationTasks("is_scanned", is_scanned)}
        errorMessage={errors.is_scanned?.errorMessage}
        hasError={errors.is_scanned?.hasError}
        {...getOverrideProps(overrides, "is_scanned")}
      ></SwitchField>
      <SwitchField
        label="Is safe"
        defaultChecked={false}
        isDisabled={false}
        isChecked={is_safe}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              nom,
              scanned_at,
              is_scanned,
              is_safe: value,
              image_path,
              created_at,
              coordinates,
            };
            const result = onChange(modelFields);
            value = result?.is_safe ?? value;
          }
          if (errors.is_safe?.hasError) {
            runValidationTasks("is_safe", value);
          }
          setIs_safe(value);
        }}
        onBlur={() => runValidationTasks("is_safe", is_safe)}
        errorMessage={errors.is_safe?.errorMessage}
        hasError={errors.is_safe?.hasError}
        {...getOverrideProps(overrides, "is_safe")}
      ></SwitchField>
      <TextField
        label="Image path"
        isRequired={false}
        isReadOnly={false}
        value={image_path}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nom,
              scanned_at,
              is_scanned,
              is_safe,
              image_path: value,
              created_at,
              coordinates,
            };
            const result = onChange(modelFields);
            value = result?.image_path ?? value;
          }
          if (errors.image_path?.hasError) {
            runValidationTasks("image_path", value);
          }
          setImage_path(value);
        }}
        onBlur={() => runValidationTasks("image_path", image_path)}
        errorMessage={errors.image_path?.errorMessage}
        hasError={errors.image_path?.hasError}
        {...getOverrideProps(overrides, "image_path")}
      ></TextField>
      <TextField
        label="Created at"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={created_at}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nom,
              scanned_at,
              is_scanned,
              is_safe,
              image_path,
              created_at: value,
              coordinates,
            };
            const result = onChange(modelFields);
            value = result?.created_at ?? value;
          }
          if (errors.created_at?.hasError) {
            runValidationTasks("created_at", value);
          }
          setCreated_at(value);
        }}
        onBlur={() => runValidationTasks("created_at", created_at)}
        errorMessage={errors.created_at?.errorMessage}
        hasError={errors.created_at?.hasError}
        {...getOverrideProps(overrides, "created_at")}
      ></TextField>
      <TextField
        label="Coordinates"
        isRequired={false}
        isReadOnly={false}
        value={coordinates}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nom,
              scanned_at,
              is_scanned,
              is_safe,
              image_path,
              created_at,
              coordinates: value,
            };
            const result = onChange(modelFields);
            value = result?.coordinates ?? value;
          }
          if (errors.coordinates?.hasError) {
            runValidationTasks("coordinates", value);
          }
          setCoordinates(value);
        }}
        onBlur={() => runValidationTasks("coordinates", coordinates)}
        errorMessage={errors.coordinates?.errorMessage}
        hasError={errors.coordinates?.hasError}
        {...getOverrideProps(overrides, "coordinates")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || iMAGEModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || iMAGEModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
