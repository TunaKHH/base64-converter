"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Base64Tool() {
  const [input, setInput] = useState("")
  const [output, setOutput] = useState("")

  const handleEncode = () => {
    try {
      const encoded = btoa(input)
      setOutput(encoded)
    } catch (error) {
      console.error(error)
      setOutput("Error: Unable to encode. Make sure you are using valid characters.")
    }
  }

  const handleDecode = () => {
    try {
      const decoded = atob(input)
      setOutput(decoded)
    } catch (error) {
      console.error(error)
      setOutput("Error: Unable to decode. Make sure you are using a valid Base64 string.")
    }
  }

  return (
    <div className="container mx-auto p-4">
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Base64 Encode/Decode Tool</CardTitle>
          <CardDescription>Enter text to encode or decode using Base64</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Textarea
            placeholder="Enter text here..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="min-h-[100px]"
          />
          <div className="flex space-x-2">
            <Button onClick={handleEncode}>Encode</Button>
            <Button onClick={handleDecode}>Decode</Button>
          </div>
          <Textarea placeholder="Output will appear here..." value={output} readOnly className="min-h-[100px]" />
        </CardContent>
      </Card>
    </div>
  )
}

