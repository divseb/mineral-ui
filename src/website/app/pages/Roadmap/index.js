/**
 * Copyright 2017 CA
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* @flow */
/* eslint-disable */
import React from 'react';
import { createStyledComponent } from '../../../../utils';
import GuidelinePage from '../../GuidelinePage';
import Markdown from '../../Markdown';
import Button from '../../../../Button';
import content from './content.md';

export default function Roadmap() {
  return (
    <GuidelinePage>
      <Markdown scope={{ Button }}>{content}</Markdown>
    </GuidelinePage>
  );
}
