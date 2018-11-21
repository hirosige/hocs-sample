import gql from "graphql-tag";

const GET_COUNTRIES = gql`
  query PageCountries(
    $first: Int!
    $skip: Int!
    $searchFilter: CountryFilter
  ) {
    allCountries(
      filter: $searchFilter
      first: $first
      skip: $skip
    ) {
      id
      name
      code
      slug
    }
  }
`

const GET_COUNTRY_COUNT = gql`
  query CountryCount(
    $searchFilter: CountryFilter
  ) {
    _allCountriesMeta(
      filter: $searchFilter
    ) {
      count
    }
  }
`

export {
  GET_COUNTRIES,
  GET_COUNTRY_COUNT
}