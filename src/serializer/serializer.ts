class Serializer {
  public serializeObject(data: any): {id: string, name: string} {
    return { id: data._id, name: data.name}
  }

  public serializeArray(arr: any): {id: string, name: string} {
    return arr.map( (data: any) => {
      return { id: data._id, name: data.name}
    })
  }
}

export default Serializer