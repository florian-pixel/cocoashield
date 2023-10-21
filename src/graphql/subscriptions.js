/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePLANTATION = /* GraphQL */ `
  subscription OnCreatePLANTATION(
    $filter: ModelSubscriptionPLANTATIONFilterInput
  ) {
    onCreatePLANTATION(filter: $filter) {
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
export const onUpdatePLANTATION = /* GraphQL */ `
  subscription OnUpdatePLANTATION(
    $filter: ModelSubscriptionPLANTATIONFilterInput
  ) {
    onUpdatePLANTATION(filter: $filter) {
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
export const onDeletePLANTATION = /* GraphQL */ `
  subscription OnDeletePLANTATION(
    $filter: ModelSubscriptionPLANTATIONFilterInput
  ) {
    onDeletePLANTATION(filter: $filter) {
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
export const onCreateIMAGE = /* GraphQL */ `
  subscription OnCreateIMAGE($filter: ModelSubscriptionIMAGEFilterInput) {
    onCreateIMAGE(filter: $filter) {
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
export const onUpdateIMAGE = /* GraphQL */ `
  subscription OnUpdateIMAGE($filter: ModelSubscriptionIMAGEFilterInput) {
    onUpdateIMAGE(filter: $filter) {
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
export const onDeleteIMAGE = /* GraphQL */ `
  subscription OnDeleteIMAGE($filter: ModelSubscriptionIMAGEFilterInput) {
    onDeleteIMAGE(filter: $filter) {
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
export const onCreateIMAGEPLANTATION = /* GraphQL */ `
  subscription OnCreateIMAGEPLANTATION(
    $filter: ModelSubscriptionIMAGEPLANTATIONFilterInput
  ) {
    onCreateIMAGEPLANTATION(filter: $filter) {
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
export const onUpdateIMAGEPLANTATION = /* GraphQL */ `
  subscription OnUpdateIMAGEPLANTATION(
    $filter: ModelSubscriptionIMAGEPLANTATIONFilterInput
  ) {
    onUpdateIMAGEPLANTATION(filter: $filter) {
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
export const onDeleteIMAGEPLANTATION = /* GraphQL */ `
  subscription OnDeleteIMAGEPLANTATION(
    $filter: ModelSubscriptionIMAGEPLANTATIONFilterInput
  ) {
    onDeleteIMAGEPLANTATION(filter: $filter) {
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
