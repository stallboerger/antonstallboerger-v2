import * as React from 'react'
import NextImage from 'next/image'
import { useMDXComponent } from 'next-contentlayer2/hooks'

function Image(props: any) {
  return <NextImage alt={props.alt} {...props} />;
}

const components = {
  Image
}

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);
    
  return (
    <Component components={{ ...components }} />
  )
}