import bcrypt from "bcryptjs";

export async function POST(req) {
  const body = await req.json();

  const hashedPassword = await bcrypt.hash(body.password, 10);

  // 🔹 Save user to DB
  await createUser({
    nid: body.nid,
    name: body.name,
    email: body.email,
    contact: body.contact,
    password: hashedPassword,
  });

  return new Response(JSON.stringify({ success: true }), { status: 201 });
}
