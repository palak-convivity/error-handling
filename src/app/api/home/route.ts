export async function GET(request: Request) {
  const random = Math.random();
  if (random < 0.5) {
    return Response.json({ message: 'Success' }, { status: 200 });
  } else {
    throw new Error('Internal Server Error');
    // return Response.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
