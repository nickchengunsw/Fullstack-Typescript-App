import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect';
import Form from './Form';

describe('The form', () => {
    it('should be defined', () => {
        expect(Form).toBeDefined();
    });

    it('should allow user to input the totalAmount object', async () => {
        render(<Form />);
        userEvent.type(screen.getByTestId('totalAmount.amount'), '10');
        userEvent.type(screen.getByTestId('totalAmount.currency'), 'EUR');
        await waitFor(() => {
            expect(screen.getByTestId('totalAmount.amount')).toHaveValue('10');
        })
        await waitFor(() => {
            expect(screen.getByTestId('totalAmount.currency')).toHaveValue('EUR');
        })
    });

    it('should allow user to input the consumer object', async () => {
        render(<Form />);
        userEvent.type(screen.getByTestId('consumer.givenNames'), 'Nick');
        userEvent.type(screen.getByTestId('consumer.phoneNumber'), '999');
        await waitFor(() => {
            expect(screen.getByTestId('consumer.givenNames')).toHaveValue('Nick');
        })
        await waitFor(() => {
            expect(screen.getByTestId('consumer.phoneNumber')).toHaveValue('999');
        })
    });

    it('should allow user to input the product string', async () => {
        render(<Form />);
        userEvent.type(screen.getByTestId('consumer.givenNames'), 'Nick');
        userEvent.type(screen.getByTestId('consumer.phoneNumber'), '999');
        await waitFor(() => {
            expect(screen.getByTestId('consumer.givenNames')).toHaveValue('Nick');
        })
        await waitFor(() => {
            expect(screen.getByTestId('consumer.phoneNumber')).toHaveValue('999');
        })
    });

    it('should allow user to submit the form to the api and return a reponse', async () => {
        render(<Form />);
        userEvent.type(screen.getByTestId('consumer.givenNames'), 'Nick');
        userEvent.type(screen.getByTestId('consumer.phoneNumber'), '999');
        userEvent.click(screen.getByTestId('submit-button'));
        await waitFor(() => {
            expect(screen.getByTestId('response')).toBeDefined();
        })
        await waitFor(() => {
            expect(screen.getByTestId('response').textContent).toContain('Status: 400');
        })
    });
});