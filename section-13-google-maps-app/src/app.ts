import axios from 'axios'

// const cL = console.log

const form = document.querySelector('form')! as HTMLFormElement
const addressInput = document.getElementById('address')! as HTMLInputElement
const GOOGLE_API_KEY = ''

type GoogleGeocodingResponse = {
	results: {
		geometry: {
			location: { lat: number, lng: number }
		}
	}[],
	status: 'OK' | 'ZERO_RESULTS'
}

// not needed as @types/googlemaps package has been installed
// declare var google: any

function searchAddressHandler(event: Event) {
	event.preventDefault()
	const enteredAddress = addressInput.value

	axios.get<GoogleGeocodingResponse>(`https://maps.googleapis.com/maps/api/geocode/json?
		address=${encodeURI(enteredAddress)}
		&key=${GOOGLE_API_KEY}`)
		.then(response => {
			if (response.data.status !== 'OK') {
				throw new Error('Could not fetch location')
			}
			const coordinates = response.data.results[0].geometry.location
			const map = new google.maps.Map(document.getElementById("map")!, {
				center: coordinates,
				zoom: 16
			})
			new google.maps.Marker({position: coordinates, map: map})
		})
		.catch(error => {
			alert(error.message)
		})
}

form.addEventListener('submit', searchAddressHandler)
