API="http://localhost:4741"
URL_PATH="/battles/1"
TOKEN=""
curl "${API}${URL_PATH}" \
  --include \
  --request DELETE \
  --header "Content-Type: application/json"
  --header "Authorization: Token token=$TOKEN"

echo
