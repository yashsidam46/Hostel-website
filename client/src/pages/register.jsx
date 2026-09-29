export function Register({ onBack }) {

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const response = await fetch("http://localhost:8000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      });

      const data = await response.json();

      console.log(data);

      if (response.ok) {
        alert("Registration successful!");
        onBack();
      } else {
        alert(data.message || "Registration failed");
      }

    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }
  };


  return (
    <div className="min-h-screen flex items-center justify-center">

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-96 p-7 shadow-lg bg-white"
      >

        <h1 className="text-2xl font-bold">
          Create Account
        </h1>

        <input
          type="text"
          name="username"
          placeholder="Username"
          required
          className="border p-2"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="border p-2"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          className="border p-2"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded"
        >
          Register
        </button>

        <button
          type="button"
          onClick={onBack}
        >
          Back
        </button>

      </form>

    </div>
  );
}