// Mock repository (in-memory) to simulate database access for users

let users = [
  { id: "1", email: "demo@example.com", displayName: "Demo User" },
];

export function getAllUsers() {
  return [...users];
}

export function getUserById(id) {
  return users.find((u) => u.id === String(id)) || null;
}

export function createUser(user) {
  if (!user || !user.email) {
    return { ok: false, error: "email is required" };
  }

  const email = String(user.email).trim().toLowerCase();
  const exists = users.some((u) => u.email === email);
  if (exists) {
    return { ok: false, error: "email already exists" };
  }

  const newUser = {
    id: String(Date.now()),
    email,
    displayName: user.displayName ? String(user.displayName).trim() : "New User",
  };

  users.push(newUser);
  return { ok: true, user: newUser };
}

export function resetUsers() {
  users = [{ id: "1", email: "demo@example.com", displayName: "Demo User" }];
}
