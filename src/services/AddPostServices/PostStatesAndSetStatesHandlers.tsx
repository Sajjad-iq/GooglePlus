import React, { ChangeEvent, useState } from 'react'

export const PostStatesAndSetStatesHandlers = () => {

  const [Textfield, setTextFelid] = useState<string>("")

  const TextChange = (e: ChangeEvent<HTMLTextAreaElement>) => setTextFelid(e.target.value)

  return { Textfield, TextChange }
}
