import React from 'react';
import { render } from '@testing-library/react';
import VideoList from './VideoList';

jest.mock('plyr-react');

test('renders Video component', () => {
    const videos = [{ id: 1, title: 'Test Video', description: 'Test description', video_url: 'http://youtube.com/blabla' }];
    const { getByText } = render(<VideoList videos={videos} />);
    const linkElement = getByText(/my favourite videos/i);
    expect(linkElement).toBeInTheDocument();
});
