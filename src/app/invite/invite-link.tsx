'use client'
import { Copy, Link2 } from 'lucide-react'
import { IconButton } from '../components/icon-button'
import { InputField, InputIcon, InputRoot } from '../components/input'

interface InviteLinkInputProps {
  inviteLink: string
}

export function InviteLinkInput({ inviteLink }: InviteLinkInputProps) {
  function copyInviteLink() {
    navigator.clipboard.writeText(inviteLink)
  }
  return (
    <InputRoot>
      <InputIcon>
        <Link2 className="size-5" />
      </InputIcon>
      <InputField readOnly defaultValue={inviteLink} />

      <IconButton className="-mr-2" onClick={copyInviteLink}>
        <Copy className="size-5" />
      </IconButton>
    </InputRoot>
  )
}
