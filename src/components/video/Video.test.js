import React from 'react';
import { render } from '@testing-library/react';
import Video from './Video';

jest.mock('plyr-react');

test('renders Video component', () => {
    const video = { id: 1, title: 'Test Video', description: 'Test description', video_url: 'http://youtube.com/blabla' };
    const { getByText } = render(<Video key={`video-${video.id}`} data={video} />);
    const linkElement = getByText(/test video/i);
    expect(linkElement).toBeInTheDocument();
});
