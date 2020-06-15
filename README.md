Application Description
The application implements two ways to search for a song: a line from a song and a file with a small content of this song.
At the beginning, the user is provided with 2 ways to search for a song.
 1 way to upload a file:
  When you click on a specific “Send File” button, a form appears in the interface for selecting a downloadable file and a “send” button. If the user selects a non-mp3 file, a warning window will appear, with possible reasons why there is no result in searching for a song.
In case of correct input, a component appears with information about this song, the component stores in itself:
Title
Album
Release date
Label
Link to a third-party source for listening
Link to listening in the audio player on the site
According to the search result, the user can confirm or disagree with the search result (if the result did not satisfy the user's expectation) In such cases, a component appears with the result
If the application guessed “Yes! I won, enjoy listening ”if not“ Congratulations, you won us! ”
At the same time, a search on another file or line will be available.
2 case, input line:
The user presses the button “SEND STRING” in the interface a form appears for entering a line from a song and the button “SEND”
If the user entered a string and the array with options did not come in the response from the server, a component appears with an error and ways to eliminate it. In case of correct input, a component appears with information about this song, the component stores in itself:
Title
Artist
Link to playback in video player.
Link to a third-party resource.
A video player can only play video from the YouTube platform, so if there is no such possibility, a warning pops up and a request to follow the link for listening.
If the response from the server does not contain a link for listening, a component informing about this appears.
The user can confirm that this is the desired song, in this case a component appears with the inscription “Yes! I won, enjoy listening ”otherwise the application has up to 5 attempts to guess the song, if it does not guess the component with the title“ Congratulations, you won us! ”
