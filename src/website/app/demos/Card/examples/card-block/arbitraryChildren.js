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
import React from 'react';
import { createStyledComponent } from '../../../../../../styles';
import { mineralTheme } from '../../../../../../themes';
import Button from '../../../../../../Button';
import Card, { CardBlock, CardTitle } from '../../../../../../Card';
import DemoLayout from '../../components/DemoLayout';

const CustomContent = createStyledComponent('div', ({ theme }) => ({
  backgroundColor: theme.color_gray_20,
  padding: `${theme.space_stack_md} 0`
}));

const customContent = (
  <CustomContent>
    <Button fullWidth>Button</Button>
  </CustomContent>
);

export default {
  id: 'children',
  title: 'Arbitrary Children',
  // $FlowFixMe
  backgroundColor: mineralTheme.color_gray_10,
  description: `A CardBlock will render any children.`,
  scope: { Button, Card, CardBlock, CardTitle, customContent, DemoLayout },
  source: `
    <DemoLayout>
      <Card>
        <CardTitle>Card Title</CardTitle>
        <CardBlock>{customContent}</CardBlock>
      </Card>
    </DemoLayout>`
};
