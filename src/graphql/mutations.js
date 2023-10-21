/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPLANTATION = /* GraphQL */ `
  mutation CreatePLANTATION(
    $input: CreatePLANTATIONInput!
    $condition: ModelPLANTATIONConditionInput
  ) {
    createPLANTATION(input: $input, condition: $condition) {
      id
      lib
      images {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updatePLANTATION = /* GraphQL */ `
  mutation UpdatePLANTATION(
    $input: UpdatePLANTATIONInput!
    $condition: ModelPLANTATIONConditionInput
  ) {
    updatePLANTATION(input: $input, condition: $condition) {
      id
      lib
      images {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deletePLANTATION = /* GraphQL */ `
  mutation DeletePLANTATION(
    $input: DeletePLANTATIONInput!
    $condition: ModelPLANTATIONConditionInput
  ) {
    deletePLANTATION(input: $input, condition: $condition) {
      id
      lib
      images {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createIMAGE = /* GraphQL */ `
  mutation CreateIMAGE(
    $input: CreateIMAGEInput!
    $condition: ModelIMAGEConditionInput
  ) {
    createIMAGE(input: $input, condition: $condition) {
      id
      nom
      scanned_at
      is_scanned
      is_safe
      image_path
      created_at
      coordinates
      PLANTATIONS {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateIMAGE = /* GraphQL */ `
  mutation UpdateIMAGE(
    $input: UpdateIMAGEInput!
    $condition: ModelIMAGEConditionInput
  ) {
    updateIMAGE(input: $input, condition: $condition) {
      id
      nom
      scanned_at
      is_scanned
      is_safe
      image_path
      created_at
      coordinates
      PLANTATIONS {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteIMAGE = /* GraphQL */ `
  mutation DeleteIMAGE(
    $input: DeleteIMAGEInput!
    $condition: ModelIMAGEConditionInput
  ) {
    deleteIMAGE(input: $input, condition: $condition) {
      id
      nom
      scanned_at
      is_scanned
      is_safe
      image_path
      created_at
      coordinates
      PLANTATIONS {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createIMAGEPLANTATION = /* GraphQL */ `
  mutation CreateIMAGEPLANTATION(
    $input: CreateIMAGEPLANTATIONInput!
    $condition: ModelIMAGEPLANTATIONConditionInput
  ) {
    createIMAGEPLANTATION(input: $input, condition: $condition) {
      id
      pLANTATIONId
      iMAGEId
      pLANTATION {
        id
        lib
        createdAt
        updatedAt
        __typename
      }
      iMAGE {
        id
        nom
        scanned_at
        is_scanned
        is_safe
        image_path
        created_at
        coordinates
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateIMAGEPLANTATION = /* GraphQL */ `
  mutation UpdateIMAGEPLANTATION(
    $input: UpdateIMAGEPLANTATIONInput!
    $condition: ModelIMAGEPLANTATIONConditionInput
  ) {
    updateIMAGEPLANTATION(input: $input, condition: $condition) {
      id
      pLANTATIONId
      iMAGEId
      pLANTATION {
        id
        lib
        createdAt
        updatedAt
        __typename
      }
      iMAGE {
        id
        nom
        scanned_at
        is_scanned
        is_safe
        image_path
        created_at
        coordinates
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteIMAGEPLANTATION = /* GraphQL */ `
  mutation DeleteIMAGEPLANTATION(
    $input: DeleteIMAGEPLANTATIONInput!
    $condition: ModelIMAGEPLANTATIONConditionInput
  ) {
    deleteIMAGEPLANTATION(input: $input, condition: $condition) {
      id
      pLANTATIONId
      iMAGEId
      pLANTATION {
        id
        lib
        createdAt
        updatedAt
        __typename
      }
      iMAGE {
        id
        nom
        scanned_at
        is_scanned
        is_safe
        image_path
        created_at
        coordinates
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
