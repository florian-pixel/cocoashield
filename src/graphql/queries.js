/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPLANTATION = /* GraphQL */ `
  query GetPLANTATION($id: ID!) {
    getPLANTATION(id: $id) {
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
export const listPLANTATIONS = /* GraphQL */ `
  query ListPLANTATIONS(
    $filter: ModelPLANTATIONFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPLANTATIONS(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        lib
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getIMAGE = /* GraphQL */ `
  query GetIMAGE($id: ID!) {
    getIMAGE(id: $id) {
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
export const listIMAGES = /* GraphQL */ `
  query ListIMAGES(
    $filter: ModelIMAGEFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listIMAGES(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getIMAGEPLANTATION = /* GraphQL */ `
  query GetIMAGEPLANTATION($id: ID!) {
    getIMAGEPLANTATION(id: $id) {
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
export const listIMAGEPLANTATIONS = /* GraphQL */ `
  query ListIMAGEPLANTATIONS(
    $filter: ModelIMAGEPLANTATIONFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listIMAGEPLANTATIONS(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        pLANTATIONId
        iMAGEId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const iMAGEPLANTATIONSByPLANTATIONId = /* GraphQL */ `
  query IMAGEPLANTATIONSByPLANTATIONId(
    $pLANTATIONId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelIMAGEPLANTATIONFilterInput
    $limit: Int
    $nextToken: String
  ) {
    iMAGEPLANTATIONSByPLANTATIONId(
      pLANTATIONId: $pLANTATIONId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        pLANTATIONId
        iMAGEId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const iMAGEPLANTATIONSByIMAGEId = /* GraphQL */ `
  query IMAGEPLANTATIONSByIMAGEId(
    $iMAGEId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelIMAGEPLANTATIONFilterInput
    $limit: Int
    $nextToken: String
  ) {
    iMAGEPLANTATIONSByIMAGEId(
      iMAGEId: $iMAGEId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        pLANTATIONId
        iMAGEId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
