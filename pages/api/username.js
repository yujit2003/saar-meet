import { clerkClient } from "@clerk/nextjs"
import { getAuth } from "@clerk/nextjs/server"

export default async function handler(req, res) {
  const { userId } = getAuth(req)
  const user = userId ? await clerkClient.users.getUser(userId) : null
  return res.status(200).json({userName: user.firstName})
}