import generateJaasJwt from '../../utils/generateJaasJwt';

export async function POST(req) {
  try {
    const { roomName, user } = await req.json();

    // Your logic to generate a JWT token
    const token = generateJaasJwt(roomName, user);
    // console.log(token); // Replace with actual token generation logic

    return new Response(JSON.stringify({ token }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to generate token' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

