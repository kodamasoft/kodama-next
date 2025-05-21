/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import { Transition } from '@headlessui/react';

export default function Clock() {
	const [password, setPassword] = useState('');
	const [show, setShow] = useState(false);

	function deobfuscateString(string) {
		return decodeURIComponent(atob(string));
	}

	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
			{!show && (
				<form
					className="flex flex-row items-center"
					onSubmit={(e) => {
						e.preventDefault();
						if (
							password ===
							deobfuscateString('d2FybXRoJTNCd2l0aGRyYXdhbA==')
						) {
							setShow(true);
						} else {
							setPassword('');
						}
					}}
				>
					<input
						className="border-b-2 border-white focus:border-b-3 focus:bg-neutral-900 focus:border-white px-4 py-2 text-white bg-black outline-none transition-colors duration-200 ease-in-out"
						type="text"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<button
						className="bg-white text-black px-4 py-2 border-b-2 border-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-200 ease-in-out"
						type="submit"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-6 h-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M8.25 4.5l7.5 7.5-7.5 7.5"
							/>
						</svg>
					</button>
				</form>
			)}

			<Transition
				show={show}
				enter="transition-opacity duration-150"
				enterFrom="opacity-0"
				enterTo="opacity-100"
				leave="transition-opacity duration-150"
				leaveFrom="opacity-100"
				leaveTo="opacity-0"
			>
				<div className="text-white text-left container mx-auto max-w-md font-serif prose py-10">
					<b>The clock on the computer displays 02:55.</b>
					<p>
						From the outside, most apartments seemed quiet, with the
						streetlights out. Most of the windows had their curtains
						shut, and every window in sight would seem to lead to a
						pitch black interior. For one exception. One wouldn’t
						notice just by glancing, but one particular window, with
						its curtains closed, seemed to let some artificial light
						dim out of the frames. Behind this window, she is
						sitting at her desk. Behind it lies a room, dimly lit by
						a desk lamp and computer screens. At this time, where
						most people tend to go to sleep, she was simply there,
						contemplating her past, her present, and what the world
						will try to present her next, seemingly captured by the
						sound coming out of her headset.
					</p>
					<b>The clock on the computer displays 03:02.</b>
					<p>
						The occasional sound of cars passing by the main street
						filled in the currently empty sound canvas, and acted as
						short stabs to spring herself back into reality, when
						the music wasn’t loud enough to mask it altogether. To
						her, this room, which once evoked memories of
						gentleness, comfort, and reassurance, now feels like a
						tomb of once better memories. How many times now, have
						such thoughts occurred to her? Drowning herself with
						sound was her only grasp back into reality, and she
						permitted such thoughts to give in every now and then.
					</p>
					<b>The clock on the computer displays 03:10.</b>
					<p>
						While browsing her many social media timelines, she
						would squint an emotion here and there. Artworks, heated
						arguments, a beautiful song, threats, inspiring
						messages… She has seen her share of it all, but somehow,
						she does not grow tired of it. She would have normally
						gone to bed long before, or done something else of her
						night by now. But this is one of those nights where she
						knows the night will not let her rest just yet, and so
						she just lets music project her into thoughts she
						wouldn’t be able to have otherwise, like an urge to
						fight those feelings, and move on forward one step at a
						time.
					</p>
					<p>Feelings of unfairness.</p>
					<p>Feelings of love.</p>
					<p>Feelings of jealousy.</p>
					<p>Feelings of unfiltered joy.</p>
					<p>Feelings of anger.</p>
					<p>
						<b>Feelings of warmth.</b>
					</p>
					<p>
						<b>Feelings of loneliness.</b>
					</p>
					<b>The clock on the computer displays 03:17.</b>
					<p>
						She thinks back of simpler times. She thinks back on the
						time where she didn’t used to have such unpleasant
						outbursts of psychological self-torture. She always
						wished for an alternative to it all, she sure would
						prefer not having to deal with any of it. She thinks of
						the last time someone genuinely cared about her. She
						thinks of the last time she received a gentle and warm
						embrace. She thinks of the last time s□e felt
						comfortable ar□□□d □□□□□□□□□□□□ S□e thi□ks of the la□t
						words sh□ said to □□□□ be□ore she □□□□□□ □□□ ev□r □ga□n.
						□he thi□□□ o□ t□e □□□□ t□m□ □□□□□□□□□□ □□□ □□□□□□ □□□
					</p>
					<p>
						No tears, nor any remorse. She could even smile, just
						thinking about it all. It all may seem long gone now,
						but the simple fact that she could experience
						pleasantness altogether is something she was forever
						grateful for.
					</p>
					<b>The clock on the computer displays 03:29.</b>
					<p>
						She cannot forgive herself for trusting people. She
						cannot forgive herself for being so blind. She cannot
						forgive herself for not grasping reality when she should
						have. She cannot forgive herself for being unaware of
						the people who cared for her. She cannot forgive herself
						for not understanding. She cannot forgive herself for
						not realizing things sooner. She cannot forgive herself
						for her leniency. She cannot forgive herself for not
						being able to forgive herself.
					</p>
					<b>The clock on the computer displays 03:38.</b>
					<p>
						Sometimes, she felt like she was part of a different
						universe altogether. She would often think, and notice
						that she felt as if she needed an entire life to make a
						single step forward. In such moments, presence feels
						like a grace, a blessing, to which you are ready to hold
						your dear life on to, and depend onto as if nothing else
						mattered. But then, whoever you were walking alongside
						with, suddenly outranges you and walks miles, without
						ever turning back to lend their hand towards you, the
						instant they let go of their hand. Such thoughts were
						often the reason for her deep sorrows, as much as she
						would like to hide them.
					</p>
					<b>The clock on the computer displays 03:54.</b>
					<p>
						But she cannot hide from them. All feelings of cynicism,
						of endearment, of tranquility, she uses as a façade to
						mask her vulnerabilities she cannot make public under
						any circumstances. Far too many times has she tried to,
						and ended up feeling it backlash upon her like a tide of
						immense suffering. More often, instead of reminiscing on
						the most complex questions out there, she simply states
						the facts - and tries to face much more fundamental
						questions.
					</p>
					<p>"How did it come to this?"</p>
					<p>"What can I do to ease the pain?"</p>
					<p>"Just what did I do to deserve this?"</p>
					<p>
						And no amount of time could let her reach any
						conclusions. And no one would magically pop and grant
						her wishes. As subtle as the summer night breeze, time
						flew by her before she could hear back from it. And the
						wind would not give in, nor would the seemingly
						unparalleled self-torture ever vanish from her thoughts.
					</p>
					<b>The clock on the computer displays 04:02.</b>
					<p>
						Her music served as a powerful blinding light to tear
						the emotions out of her, so that she could examine them
						- take a step back from them, to take a deeper and
						closer look from afar. That way, she could understand
						her own thoughts better. She knew that letting her
						emotions take the better of her was not the way to go.
						Neither did she ignore the importance of taking a break
						from her routine, and to give herself space. Doing all
						of this was necessary. It’s a tool she uses to better
						reflect on what she’s lived, and to learn how to keep
						going on.
					</p>
					<p>
						For now, her withdrawal of what once was kicked back in.
						But she knows she can get over it. Because above all
						else, she truly, only wishes for one thing:
					</p>
					<p>Being content in simply being alive.</p>
					<p>
						And so, she lets herself be embraced again by the
						softness and harshness of the music before letting her
						thoughts go to rest.
					</p>
					<p>
						<b>The clock on the computer displays 04:21.</b>
					</p>
					<p>
						<b>The clock on the computer displays 04:45.</b>
					</p>
					<p>
						<b>The clock on the computer displays 05:16.</b>
					</p>
					<p>
						<b>The clock on the computer displays 05:34.</b>
					</p>
					<p>
						<b>The clock on the computer displays 05:58.</b>
					</p>
					<p>
						<b>
							The clock on the computer
							displ□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□
						</b>
					</p>
				</div>
			</Transition>
		</div>
	);
}
