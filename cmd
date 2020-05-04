Get events

curl --header "Content-Type: application/json" --request GET http://0.0.0.0:3001/events

Get one event

curl --header "Content-Type: application/json" --request GET http://0.0.0.0:3001/events/1


Add event

curl --header "Content-Type: application/json" \
  --request POST \
  --data '{"title":"xyz", "date":"d"}' \
  http://0.0.0.0:3001/events


Update event

curl --header "Content-Type: application/json" \
  --request PUT \
  --data '{"title":"xyz", "date":"d"}' \
  http://0.0.0.0:3001/events


Delete event

curl --header "Content-Type: application/json" \
  --request DELETE \
  http://0.0.0.0:3001/events/1