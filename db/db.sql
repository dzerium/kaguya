PGDMP         8                y            sandbox    13.1    13.1     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    16394    sandbox    DATABASE     i   CREATE DATABASE sandbox WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'English_Philippines.1252';
    DROP DATABASE sandbox;
                postgres    false                        3079    16424 	   uuid-ossp 	   EXTENSION     ?   CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA public;
    DROP EXTENSION "uuid-ossp";
                   false            �           0    0    EXTENSION "uuid-ossp"    COMMENT     W   COMMENT ON EXTENSION "uuid-ossp" IS 'generate universally unique identifiers (UUIDs)';
                        false    2            �            1259    16456    address    TABLE     [  CREATE TABLE public.address (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    country character varying NOT NULL,
    zip character varying NOT NULL,
    city character varying NOT NULL,
    street character varying NOT NULL,
    number character varying NOT NULL,
    customer_id uuid NOT NULL,
    type character varying NOT NULL
);
    DROP TABLE public.address;
       public         heap    postgres    false    2            �            1259    16449    customer    TABLE     �   CREATE TABLE public.customer (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    firstname character varying NOT NULL,
    lastname character varying NOT NULL,
    email character varying NOT NULL
);
    DROP TABLE public.customer;
       public         heap    postgres    false    2            �            1259    16435    product    TABLE     �   CREATE TABLE public.product (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    name character varying NOT NULL,
    frequency smallint DEFAULT 4 NOT NULL,
    paypal_id character varying NOT NULL
);
    DROP TABLE public.product;
       public         heap    postgres    false    2            �            1259    16467    subscription    TABLE     �   CREATE TABLE public.subscription (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    product_id uuid NOT NULL,
    customer_id uuid NOT NULL,
    delivery_id uuid NOT NULL,
    billing_id uuid NOT NULL
);
     DROP TABLE public.subscription;
       public         heap    postgres    false    2            �          0    16456    address 
   TABLE DATA           \   COPY public.address (id, country, zip, city, street, number, customer_id, type) FROM stdin;
    public          postgres    false    203   �       �          0    16449    customer 
   TABLE DATA           B   COPY public.customer (id, firstname, lastname, email) FROM stdin;
    public          postgres    false    202          �          0    16435    product 
   TABLE DATA           A   COPY public.product (id, name, frequency, paypal_id) FROM stdin;
    public          postgres    false    201   *       �          0    16467    subscription 
   TABLE DATA           \   COPY public.subscription (id, product_id, customer_id, delivery_id, billing_id) FROM stdin;
    public          postgres    false    204   �       H           2606    16464    address address_pk 
   CONSTRAINT     P   ALTER TABLE ONLY public.address
    ADD CONSTRAINT address_pk PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.address DROP CONSTRAINT address_pk;
       public            postgres    false    203            F           2606    16466    customer customer_pk 
   CONSTRAINT     R   ALTER TABLE ONLY public.customer
    ADD CONSTRAINT customer_pk PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.customer DROP CONSTRAINT customer_pk;
       public            postgres    false    202            @           2606    16446    product product_paypal_un 
   CONSTRAINT     Y   ALTER TABLE ONLY public.product
    ADD CONSTRAINT product_paypal_un UNIQUE (paypal_id);
 C   ALTER TABLE ONLY public.product DROP CONSTRAINT product_paypal_un;
       public            postgres    false    201            B           2606    16444    product product_pk 
   CONSTRAINT     P   ALTER TABLE ONLY public.product
    ADD CONSTRAINT product_pk PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.product DROP CONSTRAINT product_pk;
       public            postgres    false    201            D           2606    16448    product product_un 
   CONSTRAINT     X   ALTER TABLE ONLY public.product
    ADD CONSTRAINT product_un UNIQUE (name, frequency);
 <   ALTER TABLE ONLY public.product DROP CONSTRAINT product_un;
       public            postgres    false    201    201            J           2606    16472    subscription subscription_pk 
   CONSTRAINT     Z   ALTER TABLE ONLY public.subscription
    ADD CONSTRAINT subscription_pk PRIMARY KEY (id);
 F   ALTER TABLE ONLY public.subscription DROP CONSTRAINT subscription_pk;
       public            postgres    false    204            K           2606    16473    subscription subscription_fk    FK CONSTRAINT     �   ALTER TABLE ONLY public.subscription
    ADD CONSTRAINT subscription_fk FOREIGN KEY (delivery_id) REFERENCES public.address(id);
 F   ALTER TABLE ONLY public.subscription DROP CONSTRAINT subscription_fk;
       public          postgres    false    203    204    2888            L           2606    16478    subscription subscription_fk_1    FK CONSTRAINT     �   ALTER TABLE ONLY public.subscription
    ADD CONSTRAINT subscription_fk_1 FOREIGN KEY (billing_id) REFERENCES public.address(id);
 H   ALTER TABLE ONLY public.subscription DROP CONSTRAINT subscription_fk_1;
       public          postgres    false    204    2888    203            M           2606    16483    subscription subscription_fk_2    FK CONSTRAINT     �   ALTER TABLE ONLY public.subscription
    ADD CONSTRAINT subscription_fk_2 FOREIGN KEY (customer_id) REFERENCES public.customer(id);
 H   ALTER TABLE ONLY public.subscription DROP CONSTRAINT subscription_fk_2;
       public          postgres    false    2886    202    204            N           2606    16493    subscription subscription_fk_3    FK CONSTRAINT     �   ALTER TABLE ONLY public.subscription
    ADD CONSTRAINT subscription_fk_3 FOREIGN KEY (product_id) REFERENCES public.product(id);
 H   ALTER TABLE ONLY public.subscription DROP CONSTRAINT subscription_fk_3;
       public          postgres    false    201    2882    204            �      x������ � �      �      x������ � �      �   Z   x�30M�402K�56I3�5II2�M40��5�007M6OIL�H�(�O)M.QP6�4��52v25521t1�45�0���v������� Z��      �      x������ � �     