export default function (source) {
  const {resourceQuery, getOptions} = this
  const options = getOptions();


  const queryKey = new URLSearchParams(resourceQuery).get('prop')
  const version = JSON.parse(source)[queryKey]

  return JSON.stringify(version)
}
