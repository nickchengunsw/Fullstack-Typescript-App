import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect';
import Items from './Items';

describe('The Items List', () => {
    it('should be defined', () => {
        expect(Items).toBeDefined();
    });

    it('should allow user to input item details', async () => {
        render(<Items />);
        userEvent.type(screen.getByTestId('items.0.gtin'), 'xyz');
        userEvent.type(screen.getByTestId('items.0.quantity'), '234');
        await waitFor(() => {
            expect(screen.getByTestId('items.0.gtin')).toHaveValue('xyz');
        })
        await waitFor(() => {
            expect(screen.getByTestId('items.0.quantity')).toHaveValue('234');
        })
    });

    it('should allow user to add more items', async () => {
        render(<Items />);
        userEvent.click(screen.getByTestId('add-item'));
        await waitFor(() => {
            expect(screen.getAllByTestId('items.0.gtin')).toHaveLength(1);
        })
        await waitFor(() => {
            expect(screen.getAllByTestId('items.1.gtin')).toHaveLength(1);
        })
    });

    it('should allow user to remove items', async () => {
        render(<Items />);
        userEvent.click(screen.getByTestId('add-item'));
        userEvent.click(screen.getByTestId('remove-item'));
        await waitFor(() => {
            expect(screen.getAllByTestId('items.0.gtin')).toHaveLength(1);
        })
    });
});