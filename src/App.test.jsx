// https://api.thedragonofthe.rest/quote
// http://ron-swanson-quotes.herokuapp.com/v2/quotes

import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { render, screen } from '@testing-library/react'
import App from './App'