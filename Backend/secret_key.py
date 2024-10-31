import secrets

# Generate a random secret key
print(secrets.token_urlsafe(32))

# Generate a random api key
print(secrets.token_urlsafe(64))
